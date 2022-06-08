function sum(data) {
  let arr = data.filter(
    (element) => typeof element === "number" && !Number.isNaN(element)
  );

  try {
    if (arr.length < 2) {
      throw new Error(
        "Необходимо ввести как минимум два числа, разделенных запятой"
      );
    }

    let min1 = arr[0];
    let min2 = arr[1];

    for (let i = 0; i <= arr.length; i++) {
      if (min1 > arr[i]) {
        min2 = min1;
        min1 = arr[i];
      } else if (min2 > arr[i] && i != 0) {
        min2 = arr[i];
      }
    }

    return min1 + min2;
  } catch (e) {
    alert("Извините, в данных ошибка");
    throw e;
  }
}

document.querySelector("button").onclick = function () {
  let data = document.querySelector("#expression").value;

  data = data.split(",").map(Number);

  alert(sum(data));
};

module.exports = sum;
