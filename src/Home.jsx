import React from 'react';

const Home = () => {
    return (
        <div>
            <section className='bg-grey'>
                <section className='flex px-4 text-nowrap text-5xl text-white font-medium overflow-hidden sm:relative'>
                    <p className='text-lg'>Designer & Developer</p>
                </section>
                
                <section className='big-name w-full flex overflow-hidden space-x-16 text-xl whitespace-nowrap text-white moving-text'>
                    <div className='flex animate-infinite-scroll sm:py-20'>
                        <h1>Puspa Nevas -</h1>
                    </div>
                    <div className='flex animate-infinite-scroll sm:py-20' aria-hidden='true'>
                        <h1>Puspa Nevas</h1>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Home;
