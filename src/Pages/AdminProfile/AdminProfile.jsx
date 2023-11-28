import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import UseUsermail from '../../Hook/UseUsermail';
import UseMeal from '../../Hook/UseMeal';
import UseAdmin from '../../Hook/UseAdmin';

const AdminProfile = () => {
    const { user } = useContext(AuthContext)
    const [meals] = UseMeal()
    const [isAdmin,isAdminLoading] = UseAdmin()
    const mymeal = meals.filter(item=>item.adminEmail === `${user.email}`)
    return (
        <div>
            {isAdmin?
                <section className="bg-grey-lightest py-8">
                <div className="w-full max-w-7xl mx-auto mt-8">
                    <div className="flex flex-wrap -mx-6 -my-6">
                        <div className="w-full lg:w-1/2 px-6 py-6 text-center">
                            <div className="bg-white rounded shadow-lg overflow-hidden p-8">
                                <div className="rounded-full h-64 w-64 flex items-center justify-center bg-grey-light mx-auto mb-8">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                                {/* <div className=' flex '>
                                    <div className="rounded-full h-20 w-20 items-center justify-center bg-grey-light mx-auto mb-8 flex flex-col">
                                        <h2 className='text-2xl'>First Badge</h2>
                                        <img src="https://i.ibb.co/KcZF3XD/Bronze-Icon-1.jpg" alt="" />
                                    </div>
                                </div> */}

                                <div className="font-bold text-xl mb-2">{user?.displayName}</div>
                                <p className="text-grey-darker text-base mb-4">{user?.email}</p>
                                <p className="text-grey-darker text-base mb-4">I added this number <span className='text-xl font-semibold'>( {mymeal.length} )</span> of meal to the meals section</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            :
            ""
            }
        </div>
    );
};

export default AdminProfile;