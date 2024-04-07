
import { CircularTextLoadingComponent } from '@/components/LoadingComponent';
import { BlogFunction } from '@/components/utils/blogFn';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const SingleBlog = async ({ params }) => {
    const { filteredBlogs, singleBlog, loading } = await BlogFunction.loadBlogs(params?.id)


    if (loading) {
        return <CircularTextLoadingComponent loadingObj="blog" />
    }


    return (
        <div className={`bg-bandTernary space-y-6 inner-container py-8 lg:pb-16 lg:pt-4 grid grid-cols-2 md:grid-cols-3 gap-6`}>
            <div className="flex flex-col gap-4 col-span-3 md:col-span-1">
                {
                    filteredBlogs.map(blog => <Link className='cursor-pointer z-10' key={blog?._id} href={`/blogs/${blog?._id}`}>
                        <div className="flex justify-center items-center gap-4 border rounded-lg px-4">
                            <Image className="w-40" src={blog?.image}
                                alt={`blog-${blog?._id}`}
                                width={400}
                                height={200}
                            />
                            <div className="p-4">
                                <p className="font-semibold text-bandYellow">{moment(blog?.createdAt).format('MMMM DD YYYY')}</p>
                                <h3 className="text-white">{blog?.heading}</h3>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
            <div className={`col-span-3 md:col-span-2 order-first md:order-2 p-4 lg:p-6 w-full space-y-4 border rounded-lg shadow-lg `}>
                <Image className="" src={singleBlog?.image}
                    alt={`blog-${singleBlog._id}`}
                    width={600}
                    height={250}
                />
                <p className="font-semibold text-bandYellow">{moment(singleBlog.createdAt).format('MMMM DD YYYY')}</p>
                <h1 className="text-xl lg:text-3xl font-bold text-white">{singleBlog?.heading}</h1>
                <div className='text-white' dangerouslySetInnerHTML={{ __html: singleBlog?.description }} ></div>
            </div>
        </div>
    );
};


export default SingleBlog;