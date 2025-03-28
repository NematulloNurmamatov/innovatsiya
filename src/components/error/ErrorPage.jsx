import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { IoExitOutline } from "react-icons/io5";

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Sidebar>
                <div className="flex flex-col items-center text-center p-10">
                    <h1 className="text-9xl max-[700px]:text-5xl text-red-700 font-bold">404</h1>
                    <h2 className="text-3xl font-semibold text-red-700 mt-4">Sahifa topilmadi !</h2>
                    <p className="text-gray-500 mt-2">
                        Kechirasiz, siz qidirgan sahifa mavjud emas yoki o‘chirib yuborilgan.
                    </p>
                    <div className="flex gap-2">
                        <Button
                            type="primary"
                            icon={<HomeOutlined />}
                            size="large"
                            onClick={() => navigate("/")}
                        >
                            Bosh sahifaga qaytish
                        </Button>
                        <Button
                            type="primary"
                            color="danger"
                            variant="solid"
                            icon={<IoExitOutline />}
                            size="large"
                            onClick={() => navigate(-1)}
                        >
                            Ortga qaytish
                        </Button>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
