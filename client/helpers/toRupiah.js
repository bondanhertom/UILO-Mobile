export default function toRupiah(value) {
    return value?.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
    });
}
