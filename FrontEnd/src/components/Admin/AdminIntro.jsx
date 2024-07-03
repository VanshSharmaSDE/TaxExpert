import React from 'react'
import {Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../redux/rootSlice'
import axios from 'axios'
import { message } from 'antd'

function AdminIntro() {

    const { data } = useSelector(state => state.root)
    const dispatch = useDispatch()
    const onFinish= async (values)=>{
        try {
            dispatch(ShowLoading())
            const response = await axios.post('https://taxexpertserver.onrender.com/update-home',{
                ...values,
                _id:data.home._id,
            })
            console.log(values)
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
        <Form onFinish={onFinish} layout='vertical' initialValues={data.home}>
            <label htmlFor="">Discription</label>
            <Form.Item name='discription'>
                <input type="text" placeholder='Discription'/>
            </Form.Item>
            <label htmlFor="">Images</label>
            <Form.Item name='image'>
                <input type="text" placeholder='Image'/>
            </Form.Item>
            <Form.Item name='discription'>
                <button type='submit'>Save</button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default AdminIntro