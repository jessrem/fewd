// jQuery(document).ready(function() {

var chart = c3.generate({
    data: {
        xs: {
            white: 'white_x',
            black: 'black_x',
        },
        // iris data from R
        columns: [
            ["white_x", "White"],
            ["black_x", "Black"],
            ["white", .1,.2,.3,.4,.5,.6],
            ["black", .1,.2,.3,.4,.5,.6],
        ],
        type: 'scatter'
    },
    axis: {
        x: {
            label: '',
            tick: {
                fit: false
            }
        },
        y: {
            label: ''
        }
    }
});
