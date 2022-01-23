import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import useAuth from '../../../../Uti&Hooks/useAuth';
const Review = () => {
    const { user, userData } = useAuth();
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [rating, setRating] = useState(0);
    const onSubmit = async (data, email) => {

        const postData = {
            email:  userData?.email||user?.email ,name:userData?.email || user?.displayName, userImg: user?.photoURL, rating: rating,feedBack:data.feedback
        };

        try {
            // const res = await apiAxios.post(`/rating`)
            console.log(data,postData);
        }
        catch (error) {
            if (error) {
                window.location.reload();
            }
        };
    };

    return (
        <div className="mb-4">
            <form className=" max-w-96 min-w-64 flex flex-column py-4 px-5 mx-auto shadow rounded" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center">Review</h3>
                <div className=" text-center mt-3 mb-4">
                    <small className="">Tap on Your Rating!</small><br />
                    <Rating
                        initialRating={rating}
                        emptySymbol={AiOutlineStar}
                        fullSymbol={AiFillStar}
                        fractions={4}
                        onChange={(rate) => setRating(rate)}
                    />
                </div>
                <textarea className="px-2" style={{ resize: 'none' }} placeholder="Write Feedback (Max 100 Characters)" {...register("feedback", { maxLength: 100 })} />
                {errors.feedback && <span className="mb-2 text-danger">Something's not correct</span>}
                <input type="submit" />
            </form>
        </div>

    );
};

export default Review;