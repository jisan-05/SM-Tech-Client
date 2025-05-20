import axios from "axios";
import imageCompression from "browser-image-compression";

// ✅ ImgBB Image Upload (Original)
// export const imageUpload = async (imageData) => {
//     const formData = new FormData();
//     formData.append("image", imageData);

//     const { data } = await axios.post(
//         `https://api.imgbb.com/1/upload?key=${
//             import.meta.env.VITE_IMAGE_HOSTING_KEY
//         }`,
//         formData
//     );

//     const image_url = data.data.display_url;
//     return image_url;
// };

// ✅ New: Cloudinary Upload For HD

export const cloudinaryUploadHd = async (imageFile) => {
    const options = {
        maxSizeMB: 1.5, // Limit the file size (adjust if needed)
        maxWidthOrHeight: 1920, // Higher resolution (change as needed)
        useWebWorker: true,
    };

    const compressedFile = await imageCompression(imageFile, options);

    const formData = new FormData();
    formData.append("file", compressedFile);
    formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await res.json();
    return data.secure_url;
};
// ✅ New: Cloudinary Upload For Not HD

export const cloudinaryUploadLow = async (imageFile) => {
    const options = {
        maxSizeMB: 0.5, // ⚡ Compress to around 500KB or less
        maxWidthOrHeight: 800, // 🖼 Resize max width/height to 800px
        useWebWorker: true,
    };

    const compressedFile = await imageCompression(imageFile, options);

    const formData = new FormData();
    formData.append("file", compressedFile);
    formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await res.json();
    return data.secure_url;
};
// ✅ New: Cloudinary Upload For Not HD

export const cloudinaryUploadVeryLow = async (imageFile) => {
    const options = {
        maxSizeMB: 0.3, // 💡 Smaller size (~300KB or less)
        maxWidthOrHeight: 400, // 🖼 Sufficient for avatars or profile circles
        useWebWorker: true,
    };

    const compressedFile = await imageCompression(imageFile, options);

    const formData = new FormData();
    formData.append("file", compressedFile);
    formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await res.json();
    return data.secure_url;
};

// ✅ Save user (unchanged)
export const saveUser = async (user) => {
    await axios.post(
        `${import.meta.env.VITE_API_URL}/users/${user?.email}`,
        {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        },
        
    );
};
