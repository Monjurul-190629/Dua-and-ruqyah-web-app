'use client';

import React, { useEffect, useState } from 'react';
import { getSubCategory } from '@/features/SubCategory/getSubCategory';
import Loading from '@/app/loading';

const SubCategories = ({ id }) => {
    const [subcategories, setSubcategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSubcategories = async () => {
            const data = await getSubCategory(id);
            setSubcategories(data);
            setIsLoading(false);
        };

        fetchSubcategories();
    }, [id]);

    if (isLoading) return <div><Loading /></div>;

    return (
        <div>
            <ul className='list-disc pl-5 marker:text-green-700 text-[16px] font-semibold pb-5'>
                {subcategories.map((subcategory) => (
                    <li key={subcategory.id} className='pb-5'>
                        <div
                            className={`inline cursor-pointer transition-colors duration-200 `}
                        >
                            {subcategory.subcat_name_en}
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubCategories;
