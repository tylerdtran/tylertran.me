import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { blog_post } from '../../constants/constants';

const BlogCarousel: React.FC = () => {
    return (
        <Carousel>
            {blog_post.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                    <p>{post.blog}</p>
                </div>
            ))}
        </Carousel>
    );
}

export default BlogCarousel;