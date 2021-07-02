canvas=new fabric.Canvas('Mycanvas');
width_of_block=30;
height_of_block=30;
PlayerX=500;
PlayerY=500;
playerimage="";
block_image="";

function player_update()
{
    fabric.Image.fromURL("player.png", function (Img) {
		playerimage = Img;

		playerimage.scaleToWidth(150);
		playerimage.scaleToHeight(140);
		playerimage.set({
			top: PlayerY,
			left: PlayerX
		});
		canvas.add(playerimage);

	});
}

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {
		block_image = Img;

		block_image.scaleToWidth(width_of_block);
		block_image.scaleToHeight(height_of_block);
		block_image.set({
			top: PlayerY,
			left: PlayerX
		});
		canvas.add(block_image);

	});

}

function up()
{
	if (player_y >=0)
	{
		player_y = player_y-block_image_height;
		console.log("block image height="+block_image_height);
		console.log("When up arrow key is pressed, X="+player_x+", Y="+player_y);
		canvas.remove(playerimage);
		player_update();
	}
}

function down()
{
	if (player_y<=0)
	{
		player_y = player_y+block_image_height;
		console.log("block image height="+block_image_height);
		console.log("When Down arrow key is pressed, X="+player_x+", Y="+player_y);
		canvas.remove(playerimage);
		player_update();
	}
}

function left()
{
	if (player_x>0)
	{
		player_x=player_x-block_image_width;
		console.log("block image width="+block_image_wdith);
		console.log("When Left Arrow key is pressed, X="+ player_x + ", Y ="+player_y);
		canvas.remove(playerimage);
		player_update();
	}
}

function right()
{
	if (player_x>850)
	{
		player_x=player_x+block_image_width;
		console.log("block image width="+block_image_wdith);
		console.log("When Right Arrow key is pressed, X="+ player_x + ", Y ="+player_y);
		canvas.remove(playerimage);
		player_update();
	}
}

window.addEventListener("keydown", MyKeyDown);

function MyKeyDown(e)
{
	keycode=e.keyCode;
	console.log(keycode);

	if (keycode=='38') {
		up();
	}
	else if(keycode=='39') {
		right();
	}
		
	else if (keycode=='40') {
		down();
	}

	else if (keycode == '37') {
		left();
	}
	
}

