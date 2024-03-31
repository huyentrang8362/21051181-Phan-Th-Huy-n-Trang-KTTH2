document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn form gửi đi để xử lý bằng JavaScript

        // Lấy giá trị từ các trường input và textarea
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        // Kiểm tra xem các trường đã được điền đầy đủ hay chưa
        if (name && email && rating && comment) {
            // Gửi dữ liệu đến một endpoint xử lý (ở đây là console.log để hiển thị thông tin)
            console.log("Họ và Tên: " + name);
            console.log("Email: " + email);
            console.log("Đánh Giá: " + rating);
            console.log("Bình Luận: " + comment);

            // Sau khi xử lý xong, có thể thực hiện các hành động khác ở đây
        } else {
            alert("Vui lòng điền đầy đủ thông tin trước khi gửi đánh giá.");
        }
    });
});