window.addEventListener("load", () => {
    var width = screen.width;
    var mouseEvent = "";
    

    var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "pink";
    width_of_line = 10;

    newWidth = screen.width - 70;
    newHeight = screen.height - 300;



    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e) {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;

        if (color == "") {
            color = "pink";
        }

        if (width_of_line == "") {
            width_of_line = 10;
        }

        mouseEvent = "mouseDown"
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e) {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
            ctx.moveTo(last_position_of_x, last_position_of_y);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();

        }

        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;
    }




    if (width < 992) {
        document.getElementById("myCanvas").width = newWidth;
        document.getElementById("myCanvas").height = newHeight;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;

        if (color == "") {
            color = "pink";
        }

        if (width_of_line == "") {
            width_of_line = 10;
        }
        //Addictonal Activity ends

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
        console.log("Touchstart");

        
    }

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;

            console.log("Last position of x and y coordinates = ");
            console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
            ctx.moveTo(last_position_of_x, last_position_of_y);

            console.log("Current position of x and y coordinates = ");
            console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
            ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
            ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    
});

