

import Loading from '@/app/loading';
import { fetchCategories } from '@/features/Category/categorySlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'
import img from '../../public/category_icon.png'
import SubCategories from './SubCategories';


const Categories = () => {

    const { categories, isLoading, isError, error } = useSelector(state => state.categories);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    let content;

    if (isLoading) {
        content = <Loading />
    }

    if (!isLoading && isError) {
        content = <h1>{error}</h1>
    }

    // Handle subcategories

    const [selectedId, setSelectedId] = useState(1);

    const handleSubCategories = (id) => {
        setSelectedId(id);
    }


    if (!isLoading && !isError && categories.length > 0) {
        content = <ul>
            {
                categories.map(category =>


                    <li key={category.id}>


                        <div className='flex mb-5 gap-5 justify-between cursor-pointer items-center bg-slate-200 rounded-lg' onClick={() => handleSubCategories(category.cat_id)} >
                            <div className="flex gap-6 mb-4 items-center pt-3 pl-2">
                                <Image className="w-8" src={img} alt="Category icon" />
                                <div>
                                    <p className="text-[#1FA45B] font-semibold">
                                        {category.cat_name_en}
                                    </p>
                                    <p className="font-semibold text-[#7E7E7E]">
                                        Subcategory: {category.no_of_subcat}
                                    </p>
                                </div>
                            </div>
                            <div className='pr-2'>
                                <p className="font-semibold text-center">{category.no_of_dua}</p>
                                <p className="font-semibold text-[#7E7E7E]">Duas</p>
                            </div>
                        </div>

                        <div className=''>
                            {selectedId === category.cat_id && (
                                <SubCategories id={category.cat_id} />
                            )}
                        </div>

                    </li>)
            }
        </ul>
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default Categories;