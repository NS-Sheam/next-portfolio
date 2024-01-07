import React from 'react';

const BlogsLoader = () => {
    return (
        <div className="grid md:grid-cols-3 items-end mx-auto my-5 gap-5 -mt-8">
            {
                Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto h-64">
                        <div className="animate-pulse space-x-4">
                            <div className=" bg-slate-700 h-32 w-full "></div>
                            <div className="flex-1 space-y-6 py-4">
                                <div className="h-2 bg-slate-700 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogsLoader;