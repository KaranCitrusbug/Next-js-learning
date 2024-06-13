"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { addBlogs } from "@/service/blogService";
import { ToastSuccess } from "@/components/ToastMessage";
import { blogDetailProps } from "@/types/blogType";


export default function AddBlogs() {
  const [form] = Form.useForm();
  const [tags, setTags] = useState<string[]>([]);

  const onFinish = async (values: blogDetailProps) => {
    const newBlog = await addBlogs(values);
    ToastSuccess("Blog added successfully:");
    form.resetFields();
    setTags([]);
  };

  const onCheckboxChange = (checkedValues: string[]) => {
    setTags(checkedValues);
  };

  return (
    <div className="container h-screen singleBlog flex">
      <Form
        form={form}
        className="w-96 m-auto bg-[#84a98c] p-5 rounded"
        onFinish={onFinish}
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
            Add Blog
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
