import Swal from "sweetalert2";

export function alertFailure(message) {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    confirmButtonColor: "#070D59",
  });
}

export function alertSuccees(message) {
  return Swal.fire({
    icon: "Success",
    title: "Success",
    text: message,
    confirmButtonColor: "#070D59",
  });
}
