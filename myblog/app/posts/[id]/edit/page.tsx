"use client";
import React, { useEffect, useState } from "react";

import { Form, Input, Button, Checkbox } from "antd";
import { blogDetailProps } from "@/types/blogType";
import { editBlogs,  getSingleBlog } from "@/service/blogService";
import { blogAddProps } from "@/types/blogAddprops";
import { ToastSuccess } from "@/components/ToastMessage";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
export default function EditPost({ params }: { params: { id: string } }) {
  const userId = params.id
  console.log(userId)
  const [form] = Form.useForm();
  const [tags, setTags] = useState<string[]>([]);
  const route = useRouter()

  const onFinish = async (values: blogDetailProps) => {
    console.log(values)
    try {
      const editBlog = await editBlogs(values )
      ToastSuccess("Blog Edited successfully")
      // route.push('/')

    } catch (error) {
      console.log(error)
    }
  
  };

  const onCheckboxChange = (checkedValues: string[]) => {
    setTags(checkedValues);
  };
  const fetchBlogData = async () => {      
    const blog = await fetch(`http://localhost:3000/api/${userId}`);
    const blogDetail = await blog.json()
    
    form.setFieldsValue({
      title: blogDetail.title,
      body: blogDetail.body,
      image: blogDetail.image,
      tags: blogDetail.tags,
    });
    setTags(blogDetail.tags);
  };

  useEffect(() => {
    fetchBlogData();
  }, [params.id]);
  return (
    <div className="container h-screen singleBlog flex">
      <Form
        form={form}
        className="m-auto bg-[#84a98c] p-5 rounded"
        onFinish={onFinish}
        style={{width :"50%"}}
      >
        <Form.Item
          label="Blog Title"
          name="title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Blog Detail"
          name="body"
          rules={[{ required: true, message: "Please input the body!" }]}
        >
          <Input.TextArea rows={7} />
        </Form.Item>

        <Form.Item label="Blog Image URL" name="image">
          <Input />
        </Form.Item>

        <Form.Item label="Tags">
          <Checkbox.Group onChange={onCheckboxChange} value={tags}>
            <Checkbox value="crime">Crime</Checkbox>
            <Checkbox value="history">History</Checkbox>
            <Checkbox value="fiction">Fiction</Checkbox>
            <Checkbox value="french">French</Checkbox>
            <Checkbox value="mystery">Mystery</Checkbox>
            <Checkbox value="love">Love</Checkbox>
            <Checkbox value="classic">Classic</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item className="flex justify-end">
          <Button type="primary" htmlType="submit">
            Edit Blog
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
