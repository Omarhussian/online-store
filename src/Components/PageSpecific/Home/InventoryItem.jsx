import React, { useState } from 'react';
import { Dropdown, Menu, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../../Lib/Redux/Slices/InventorySlice';

const { TextArea } = Input;

const InventoryItem = ({ product }) => {
    const dispatch = useDispatch();
    const [selectedStatus, setSelectedStatus] = useState(product.status);

    const handleMenuClick = (e) => {
        setSelectedStatus(e.key);
        dispatch(updateProduct({
            id: product.id,
            updatedProduct: { ...product, status: e.key }
        }));
    };

    return (
        <div className='border-4 border-[#000000] w-full h-32 overflow-hidden '>
            <div className='flex  w-full justify-center items-start'>
                <Input placeholder='Name' className='p-4 border border-[#000000] mb-4' value={product.title} readOnly />
                <Input placeholder='Price' className='p-4 border border-[#000000] mb-4' value={product.price} readOnly />
                <Dropdown overlay={
                    <Menu onClick={handleMenuClick}>
                        <Menu.Item key="Available">Available</Menu.Item>
                        <Menu.Item key="Unavailable">Unavailable</Menu.Item>
                    </Menu>
                } placement='bottomCenter'>
                    <Input
                        placeholder={selectedStatus}
                        className='p-4 border border-[#000000] mb-4 cursor-pointer'
                        value={selectedStatus}
                        readOnly
                    />
                </Dropdown>

            </div>
            <div className='flex flex-col'>


                <TextArea
                    placeholder='Description'
                    className='p-4 border border-[#000000] mb-4'
                    autoSize={{ minRows: 3, maxRows: 6 }}
                    value={product.description}
                    onChange={(e) => {
                        dispatch(updateProduct({
                            id: product.id,
                            updatedProduct: { ...product, description: e.target.value }
                        }));
                    }}
                />
                <Input
                    placeholder='Image URL'
                    className='p-4 border border-[#000000] mb-4'
                    value={product.picture}
                    onChange={(e) => {
                        dispatch(updateProduct({
                            id: product.id,
                            updatedProduct: { ...product, picture: e.target.value }
                        }));
                    }}
                />
            </div>
        </div>
    );
};

export default InventoryItem;
