import React from 'react'
import {Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../redux/rootSlice'
import axios from 'axios'
import { message } from 'antd'

function AdminAbout() {
    const { data } = useSelector(state => state.root)
    const dispatch = useDispatch()
    const onFinish= async (values)=>{
        try {
            dispatch(ShowLoading())
            const response = await axios.post('https://taxexpertserver.onrender.com/update-about',{
                ...values,
                _id:data.about._id,
            })
            dispatch(HideLoading())
            if(response.data.success){
                message.success(response.data.message)
            }
            else{
                message.error(response.data.error)
            }
        } catch (error) {
            dispatch(HideLoading())
           message.error(error.message) 
        }
    }

  return (
    <div>
        <Form onFinish={onFinish} layout='vertical' initialValues={data.about}>
            <label htmlFor="">Discription 1</label>
            <Form.Item name='discription1'>
                <input type="text" placeholder='Discription'/>
            </Form.Item>
            <label htmlFor="">Discription 2</label>
            <Form.Item name='discription2'>
                <input type="text" placeholder='Discription'/>
            </Form.Item>
            <label htmlFor="">Image 1</label>
            <Form.Item name='image1' >
                <input type="text" placeholder='Image'/>
            </Form.Item>
            <label htmlFor="">Image 2</label>
            <Form.Item name='image2' >
                <input type="text" placeholder='Image'/>
            </Form.Item>
            <Form.Item name='discription'>
                <button type='submit'>Save</button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default AdminAbout