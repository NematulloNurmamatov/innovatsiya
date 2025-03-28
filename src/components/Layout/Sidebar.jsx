import React, { useState, useEffect, memo } from 'react';
import { Layout, Menu } from 'antd';
import { sidebar_items } from '../../constants/sidebarItems';
import { useNavigate } from 'react-router-dom';
import '../../styles/scrollbar.css';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

export default memo(function Sidebar({ children }) {
    const navigate = useNavigate();
    const [current, setCurrent] = useState('sub1');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar automatically on smaller screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 700) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onClick = (e) => {
        // setCurrent(e.key); // Aktiv menyuni yangilash
        navigate(e.key);
    };


    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Sidebar */}
            <Sider
                width={269}
                className={`!site-layout-background !bg-white !pt-10 !custom-scrollbar overflow-y-auto flex-col transition-none ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed md:static`}
                style={{
                    height: '100vh',
                    overflowY: 'auto',
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                }}
            >

                <button
                    onClick={toggleSidebar}
                    className="absolute !top-4 right-4 md:hidden bg-gray-200 p-1 rounded-md"
                >
                    {isSidebarOpen ? <CloseOutlined /> : '☰'}
                </button>

                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="inline"
                    items={sidebar_items}
                    motion={false}
                />
            </Sider>

            {/* Content Area */}
            <Layout style={{ padding: '0 14px 14px' }}
                className=' max-[767px]:ml-[-270px]'
            >
                <Content
                    style={{
                        padding: 2,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden !mt-4 rounded-md mb-4 z-40"
                    >
                        {isSidebarOpen ? '✖' : <MenuOutlined />}
                    </button>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
})