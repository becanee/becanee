"use client"

import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const Index = (props?: any) => {
    const [data, setData] = useState<any>([]);
    const [category, setCategory] = useState<any>([]);
    const [proficiency, setProficiency] = useState<any>([]);
    const [loading, setLoading] = useState<any>(false);
    const [error, setError] = useState<any>(null);
    const [pagination, setPagination] = useState<any>(null);

    const fetchData = useCallback(async (page = 1, limit = 10, search = '') => {
        try {
            setLoading(true);
            setError(null);
            setData([]);

            // Bangun URL dengan parameter query
            const params = new URLSearchParams({
                page: page.toString(),
                limit: limit.toString(),
                ...(search && { search })
            });

            // const url = `/api/service/competency?${params.toString()}`;
            const url = `/api/service/competency`;

            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true // Untuk mengirim cookie _K
            });

            if (response.data.status) {

                setData(response?.data?.data || []);
                setPagination(response.data.pagination);
            } else {
                setError(response.data.message || 'Gagal mengambil data');
                setData([]);
                setPagination(null);
            }

        } catch (error: any) {
            console.error('Error fetching competency:', error);

            if (error.response) {
                setError(`Error ${error.response.status}: ${error.response.data?.message || error.response.statusText}`);
            } else if (error.request) {
                setError('Tidak dapat terhubung ke server');
            } else {
                setError('Terjadi kesalahan yang tidak diketahui');
            }

            setData([]);
            setPagination(null);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchCategory = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            setData([]);

            const url = `/api/service/competency/category`;

            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true // Untuk mengirim cookie _K
            });

            if (response.data.status) {

                setCategory(response?.data?.data || []);
            } else {
                setError(response.data.message || 'Gagal mengambil data');
                setCategory([]);
            }

        } catch (error: any) {
            console.error('Error fetching category:', error);

            if (error.response) {
                setError(`Error ${error.response.status}: ${error.response.data?.message || error.response.statusText}`);
            } else if (error.request) {
                setError('Tidak dapat terhubung ke server');
            } else {
                setError('Terjadi kesalahan yang tidak diketahui');
            }

            setCategory([]);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchProficiency = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            setData([]);

            const url = `/api/service/proficiency`;

            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true // Untuk mengirim cookie _K
            });

            if (response.data.status) {
                setProficiency(response?.data?.data || []);
            } else {
                setError(response.data.message || 'Gagal mengambil data');
                setProficiency([]);
            }

        } catch (error: any) {
            console.error('Error fetching proficiency:', error);

            if (error.response) {
                setError(`Error ${error.response.status}: ${error.response.data?.message || error.response.statusText}`);
            } else if (error.request) {
                setError('Tidak dapat terhubung ke server');
            } else {
                setError('Terjadi kesalahan yang tidak diketahui');
            }

            setProficiency([]);
        } finally {
            setLoading(false);
        }
    }, []);

    const addData = async (addPayload: any) => {
        setError(null);

        try {
            const response = await axios.post('/api/service/competency/save', addPayload, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.data.status) {
                await fetchData();
                return {
                    success: true,
                    data: response.data.data,
                    message: response.data.message
                };
            } else {
                throw new Error(response.data.message || 'Add failed');
            }
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || err.message || 'Terjadi kesalahan saat menambahkan data';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        }
    };

    const updateData = async (updatePayload: any, id: string) => {
        setError(null);

        try {
            const response = await axios.patch(`/api/service/competency/update/${id}`, updatePayload, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.data.status) {
                await fetchData();
                return {
                    success: true,
                    data: response.data.data,
                    message: response.data.message
                };
            } else {
                throw new Error(response.data.message || 'Add failed');
            }
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || err.message || 'Terjadi kesalahan saat menambahkan data';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        }
    };

    const deleteData = async (id: string) => {
        setError(null);

        try {
            const response = await axios.delete(`/api/service/competency/delete/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.data.status) {
                await fetchData();
                return {
                    success: true,
                    data: response.data.data,
                    message: response.data.message
                };
            } else {
                throw new Error(response.data.message || 'Add failed');
            }
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || err.message || 'Terjadi kesalahan saat menambahkan data';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        }
    }

    useEffect(() => {
        fetchData();
        fetchCategory();
        fetchProficiency();
    }, []);

    return {
        data,
        category,
        proficiency,
        loading,
        error,
        pagination,
        fetchData,
        addData,
        updateData,
        deleteData
    }
};

export default Index;