import React from 'react'
import {Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../redux/rootSlice'
import axios from 'axios'
import { message } from 'antd'

function AdminExperience() {
    const { data } = useSelector(state => state.root)
    const dispatch = useDispatch()
    const onFinish= async (values)=>{
        try {
            dispatch(ShowLoading())
            const response = await axios.post('https://taxexpertserver.onrender.com/update-experience',{
                ...values,
                _id:data.experience._id,
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
        <Form onFinish={onFinish} layout='vertical' initialValues={data.experience}>
            <label htmlFor="">Experience 1</label>
            <Form.Item name='time1'>
                <input type="text" placeholder='Discription'/>
            </Form.Item>
            <Form.Item name='discription1'>
                <input type="text" placeholder='Discription'/>
            </Form.Item>
            <label htmlFor="">Experience 2</label>
            <Form.Item name='time2'>
                <input type="text" placeholder='Discription'/>
            </Form.Item>
            <Form.Item name='discription2'>
                <input type="text" placeholder='Discription'/>
            </Form.Item>
            <label htmlFor="">Experience 3</label>
            <Form.Item name='time3'>
                <input type="text" placeholder='Discription'/>
            </Form.Item>
            <Form.Item name='discription3'>
                <input type="text" placeholder='Discription'/>
            </Form.Item>
            <label htmlFor="">Experience 4</label>
            <Form.Item name='time4'>
                <input type="text" placeholder='Discription'/>
            </Form.Item>
            <Form.Item name='discription4'>
                <input type="text" placeholder='Discription'/>
            </Form.Item>
            <Form.Item name='discription'>
                <button type='submit'>Save</button>
            </Form.Item>
        </Form>
    </div>

  )
}

export default AdminExperience