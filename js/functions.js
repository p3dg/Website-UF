$(document).ready(function()
{
	$('#mainNav').hover(
	function()
	{
		$('#navWrapper').addClass('hovered', 400);
	}, 
	function()
	{
		$('#navWrapper').removeClass('hovered');
	});
});