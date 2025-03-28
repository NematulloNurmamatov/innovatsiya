import React, { useState } from 'react';
import { Input, Button, DatePicker } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

export default function Search({ newsData, setFilteredNews }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [dateRange, setDateRange] = useState(null);

    // Qidiruvni bajarish
    const handleSearch = () => {
        const filtered = newsData.filter((news) => {
            const matchesTitle = news.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDate =
                !dateRange ||
                (new Date(news.date) >= dateRange[0] && new Date(news.date) <= dateRange[1]);
            return matchesTitle && matchesDate;
        });
        setFilteredNews(filtered);
    };

    // Filtrlarni tozalash
    const clearFilters = () => {
        setSearchTerm("");
        setDateRange(null);
        setFilteredNews(newsData);
    };

    return (
        <div>
            <div className="flex flex-wrap gap-4 mb-4">
                <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-1/2 md:w-1/3"
                    size="large"
                />
                <RangePicker
                    className="w-full sm:w-1/2 md:w-1/3"
                    size="large"
                    onChange={(dates) => setDateRange(dates)}
                />
                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        size="large"
                        onClick={handleSearch}
                    >
                        Qidirish
                    </Button>
                    <Button
                        icon={<ReloadOutlined />}
                        size="large"
                        onClick={clearFilters}
                    >
                        Tozalash
                    </Button>
                </div>
            </div>
        </div>
    );
}
