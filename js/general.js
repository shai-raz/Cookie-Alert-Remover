Object.defineProperty(String.prototype, 'includesFromArr', {
    value: function (arr) {
        console.log(this.toString())
        for (let i = 0; i < arr.length; i++) {
            if (this.includes(arr[i]))
                return true;
        }
        return false;
    }
});