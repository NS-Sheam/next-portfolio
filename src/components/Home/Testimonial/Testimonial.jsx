// import React from 'react';
// import man1 from '@/assets/testimonial/man1.jpg';
// import man2 from '@/assets/testimonial/man2.jpg';
// import man3 from '@/assets/testimonial/man3.jpg';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// // import Swiper from 'swiper';
// import 'swiper/css';
// const Testimonial = () => {
//     const carouselData = [
//         {
//             name: 'Jhankar Mahbub',
//             designation: 'CEO',
//             company: 'Programming Hero',
//             image: man2,
//             description: 'Working with QuikFrontend has been an absolute pleasure! Their team displayed unmatched professionalism, creativity, and technical expertise. They not only delivered a visually stunning website but also ensured it was seamlessly functional and user-friendly. The attention to detail and commitment to our project were truly commendable. I highly recommend Mai QuikFrontend for any web development needs. Their dedication and innovative approach truly set them apart in the industry.'
//         },
//         {
//             name: 'Sumit Saha',
//             designation: 'CEO',
//             company: 'Learn with Sumit',
//             image: man3,
//             description: 'Working with QuikFrontend has been an absolute pleasure! Their team displayed unmatched professionalism, creativity, and technical expertise. They not only delivered a visually stunning website but also ensured it was seamlessly functional and user-friendly. The attention to detail and commitment to our project were truly commendable. I highly recommend Mai QuikFrontend for any web development needs. Their dedication and innovative approach truly set them apart in the industry.'
//         },
//         {
//             name: 'Nishan Sah',
//             designation: 'CEO',
//             company: 'Fastbooks',
//             image: man1,
//             description: 'Working with QuikFrontend has been an absolute pleasure! Their team displayed unmatched professionalism, creativity, and technical expertise. They not only delivered a visually stunning website but also ensured it was seamlessly functional and user-friendly. The attention to detail and commitment to our project were truly commendable. I highly recommend Mai QuikFrontend for any web development needs. Their dedication and innovative approach truly set them apart in the industry.'
//         }
//     ]
//     return (
//         <section className="my-container py-6">
//             <h3 className='text-xl md:text-3xl font-bold text-band-orange text-center'>Testimonial</h3>
//             <h2 className='text-3xl md:text-6xl font-bold text-white text-center mb-16 mt-4'>What people think about us!</h2>
//             <Swiper
//                 modules={[Autoplay]}
//                 slidesPerView={1}
//                 autoplay={{ delay: 5000 }}
//                 loop={true}
//             >
//                 {
//                     carouselData.map(({ name, image, description }, index) =>

//                         <SwiperSlide key={index}>
//                             <div
//                                 className='flex flex-col gap-4 justify-center items-center md:w-3/4 mx-auto p-8 md:p-16 bg-[#322464] rounded-2xl shadow-2xl border border-band-orange'
//                             >
//                                 <Image
//                                     src={image}

//                                     className=' rounded-full h-28 w-28 p-2 border-2 border-band-orange bg-white '
//                                 />
//                                 <p
//                                     className='text-xl md:text-2xl text-white'>{description} <span className='font-bold text-band-orange'>- {name}</span></p>
//                             </div>
//                         </SwiperSlide>
//                     )
//                 }
//             </Swiper>
//         </section>
//     );
// };

// export default Testimonial;
