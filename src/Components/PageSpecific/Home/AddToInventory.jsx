import React, { useState } from 'react';
import { Input, Dropdown, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Lib/Redux/Slices/InventorySlice';

const { TextArea } = Input;

const AddToInventory = () => {
    
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: 0,
        picture: '',
        status: 'Available'
    });

    const handleMenuClick = (e) => {
        setFormData({ ...formData, status: e.key });
    };

    const handleInputChange = (e, key) => {
        let value = e.target.value;
        // Convert price to integer
        if (key === 'price') {
            value = parseInt(value) || 0;
        }
        setFormData({ ...formData, [key]: value });
    };

    const handleAddProduct = () => {
        dispatch(addProduct(formData));
        setFormData({
            title: '',
            description: '',
            price: '',
            picture: '',
            status: 'Available'
        });
    };

    return (
        <div className='border-4 border-[#000000] w-full h-44 overflow-hidden'>
            <div className='flex  w-full justify-center items-start'>
                <Input placeholder='Name' className=' border border-[#000000] rounded-none p-[10px]' value={formData.title} onChange={(e) => handleInputChange(e, 'title')} />
                <Input placeholder='Price' className=' border border-[#000000] rounded-none  p-[10px]' value={formData.price} onChange={(e) => handleInputChange(e, 'price')} />
                <Dropdown
                    overlay={
                        <Menu onClick={handleMenuClick}>
                            <Menu.Item key="Available">Available</Menu.Item>
                            <Menu.Item key="Unavailable">Unavailable</Menu.Item>
                        </Menu>
                    } placement='bottomCenter'>
                    <Input
                        placeholder={formData.status}
                        className=' border border-[#000000] cursor-pointer rounded-none p-[10px] '
                        value={formData.status}
                        readOnly
                    />
                </Dropdown>
            </div>
            <div className='flex flex-col'>
                <TextArea
                    placeholder='Description'
                    className='p-2 border border-[#000000] rounded-none'
                    autoSize={{ minRows: 2, maxRows: 6 }}
                    value={formData.description}
                    onChange={(e) => handleInputChange(e, 'description')}
                />
                <Input
                    placeholder='Image URL'
                    className='border pb-2  border-[#000000] rounded-none'
                    value={formData.picture}
                    onChange={(e) => handleInputChange(e, 'picture')}
                />
            </div>
            <button onClick={handleAddProduct} className='border-[#000000] border w-full hover:bg-black hover:text-white transition duration-300 ease-linear transform'>ADD FISH</button>
        </div>
    );
};

export default AddToInventory;
