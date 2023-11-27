// let query = searchQuery
//     ? {
//         title: new RegExp(req.query.searchQuery, "i"),
//       }
//     : {  };


//     const { order, sortby, searchQuery, page, limit } = req.query;
//     const sortingOrder = order === "asc" ? 1 : -1;
//     const sortingParams =
//       sortby === "date"
//         ? { createdAt: order }
//         : { "activityRating.averageRating": sortingOrder };
//     let query = searchQuery
//       ? {
//           title: new RegExp(req.query.searchQuery, "i"),
//         }
//       : {};
//   collection.find(query).sort(sortingParaams).skip(...).limit(...)

//   https://dev.to/chayti/increasing-firebase-project-limit-5fei

<div>
            <form className="card-body " >
                {/* Name */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        {/* <CiUser /> */}
                        <span className="label-text text-pink-300">Name</span>
                    </div>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>

                {/* Brand Name */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        {/* <LuType /> */}
                        <span className="label-text text-pink-300">Brand Name</span>
                    </div>
                    <select id="cars" name="brandname" placeholder="Brand Name" className="bordered border-2 rounded-lg h-12">
                        <option value="Lamborgini">Lamborgini</option>
                    </select>
                </div>

                {/* Image */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        {/* <CiImageOn /> */}
                        <span className="label-text text-pink-300">Photo Url</span>
                    </div>
                    <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                </div>

                {/* Price */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        {/* <CiBadgeDollar /> */}
                        <span className="label-text text-pink-300">Price</span>
                    </div>
                    <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                </div>

                {/* Rateing */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        {/* <CiBadgeDollar /> */}
                        <span className="label-text text-pink-300">Rateing</span>
                    </div>
                    <input type="text" name="rateing" placeholder="Rateing" className="input input-bordered" required />
                </div>

                {/* Sort Description */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        {/* <MdOutlineDescription /> */}
                        <span className="label-text text-pink-300">Sort Description</span>
                    </div>
                    <input type="text" name="description" placeholder="Sort Description" className="input input-bordered" required />
                </div>


                {/* Type */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        {/* <LuType /> */}
                        <span className="label-text text-pink-300">Type of Cars</span>
                    </div>
                    <select id="cars" name="cartypes" placeholder="type of Cars " className="bordered border-2 rounded-lg h-12">
                        <option value="Classic">Car</option>
                    </select>
                </div>

                <div className="form-control mt-6  items-center justify-center">
                    <button type="submit" className="btn bg-green-300 rounded-2xl w-1/2">Add Product</button>
                </div>
            </form>
        </div>