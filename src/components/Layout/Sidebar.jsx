import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { sidebar_items } from '../../constants/sidebarItems';
import { useNavigate } from 'react-router-dom';
import '../../styles/scrollbar.css';



const { Sider, Content } = Layout;

export default function Sidebar({ children }) {
    const navigate = useNavigate()

    const [current, setCurrent] = useState('sub1');

    const onClick = (e) => {
        console.log(e);
        navigate(e?.key)

    };


    return (
        <Layout style={{ minHeight: '100vh' }} className='lg:flex-col '>
            {/* Sidebar */}
            <Sider
                width={299}
                className="!site-layout-background !bg-white !pt-3  !custom-scrollbar overflow-y-auto  custom-scroll"
                style={{
                    height: '100vh', // Make the Sider fill the entire height of the screen
                    overflowY: 'auto', // Enable vertical scrolling
                    position: 'sticky', // Keep the sidebar fixed on top
                    top: 0, // Keeps the sidebar at the top of the page
                }}
            >
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]} // Highlight the selected menu item
                    mode="inline"
                    items={sidebar_items}
                />
            </Sider>

            {/* Content Area */}
            <Layout style={{ padding: '0 24px 24px', }}>
                <Content
                    style={{
                        padding: 2,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
} 
