import React, { useState } from 'react';
import { Dropdown, Menu, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
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

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="Available">Available</Menu.Item>
            <Menu.Item key="Unavailable">Unavailable</Menu.Item>
        </Menu>
    );

    return (
        <div className='border-4 border-[#000000] w-full h-44 overflow-hidden'>
            <div className='flex w-full justify-center items-start'>
                <Input placeholder='Name' className='border border-[#000000] rounded-none p-[10px]' value={product.title} onChange={(e) => {
                    dispatch(updateProduct({
                        id: product.id,
                        updatedProduct: { ...product, title: e.target.value }
                    }));
                }} />
                <Input placeholder='Price' className='border border-[#000000] rounded-none p-[10px]' value={product.price} onChange={(e) => {
                    dispatch(updateProduct({
                        id: product.id,
                        updatedProduct: { ...product, price: +e.target.value }
                    }));
                }} />
                <Dropdown overlay={menu} trigger={['click']} placement='bottom' className='cursor-pointer'>
                    <Input
                        placeholder={selectedStatus}
                        className='border border-[#000000] cursor-pointer rounded-none p-[10px]'
                        value={selectedStatus}
                        readOnly
                        suffix={<DownOutlined />}
                    />
                </Dropdown>
            </div>
            <div className='flex flex-col'>
                <TextArea
                    placeholder='Description'
                    className='p-4 border border-[#000000] rounded-none'
                    autoSize={{ minRows: 2, maxRows: 6 }}
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
                    className='p-3 border border-[#000000] rounded-none'
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
