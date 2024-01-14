/* eslint-disable react/prop-types */
import React from "react";
import { RTE, Input, Select } from "../index";
import { useForm } from "react-hook-form";
import queryService from "../../appwrite/query";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader } from '../index'
import { useState } from "react";

const PostForm = ({ blog }) => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
  } = useForm({
    defaultValues:{
      title: blog?.title || "",
      content: blog?.content || "",
      slug: blog?.$id || "",
      status: blog?.status || "active",
      category: blog?.category || "Technology",
    }
  });
  // console.log("form :",blog)
  const [loader, setLoader] = useState(false)
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const submit = async (data) => {
    //console.log(data,' ',userData)
    setLoader(true)
    if (blog) {
      const file = data.image[0]
        ? await queryService.uploadFile(data.image[0])
        : setLoader(false);
      if (file) {
        queryService.deleteFile(blog.featuredImage);
      }
      const dbPost = await queryService.updateBlog(blog.$id, {
        ...data,
        featuredImage: file && file.$id,
      });
      if (dbPost) {
        navigate(`/blog/${dbPost.$id}`);
      }
    } else {

      const file = data.image[0]
        ? await queryService.uploadFile(data.image[0])
        : setLoader(false);
        // console.log(data.slug.substring(0,32))
      const dbPost = await queryService.createBlog({
        ...data,
        featuredImage: file.$id,
        userId: userData.$id,
        author: userData.name,
        slug: data.slug.substring(0,32),
      });

     
      if (dbPost) {
        navigate(`/blog/${dbPost.$id}`);
      }
    }
  };

  const slugTransform = React.useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-");
    return "";
  }, []);
  React.useEffect(()=>{
    const subcription = watch((value,{name})=>{
        if(name ==='title'){
            setValue('slug',slugTransform(value.title),{shouldValidate:true})
        }
    })
    return () =>{
        subcription.unsubscribe()
    }
  },[watch,slugTransform ,setValue]);

  return <>
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-6">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-4">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !blog })}
                />
                {blog && (
                    <div className="w-full mb-4">
                        <img
                            src={queryService.getFileView(blog.featuredImage)}
                            alt={blog.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={['Technology', 'Product', 'Software Engineering', 'Food','Business']}
                    label="Category"
                    className="mb-4"
                    {...register("category", { required: true })}
                />
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <button type="submit" className="py-2 px-4 text-white bg-green-700 rounded-md">
                
               { loader ? <Loader size='sm' parentHeight="h-0" ParentClassName='px-4 py-2'/> : (blog ? "Update" : "Submit")  }  
                </button>
                {/* <button type="submit" bgColor={blog ? "bg-green-500" : undefined} className="w-full">
                    {blog ? "Update" : "Submit"}
                </button> */}
            </div>
        </form>
  </>;
};

export default PostForm;
