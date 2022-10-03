function x() {
    console.log('ini adalah fungsi x')
    function y() {
        console.log('ini adalah fungsi y')
        function z() {
        console.log('ini adalah fungsi z')
        }
        z();
    }
    y();
}
x();