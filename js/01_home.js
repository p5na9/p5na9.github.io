
$(".interest").hide();
$(".roadMap").hide();
$(".login_join").hide();
$(".home").show();

$(".interest-link").click(function() {
    $(".home").hide();
    $(".interest").show();
    $(".roadMap").hide();
    $(".login_join").hide();
});
$(".roadMap-link").click(function() {
    $(".home").hide();
    $(".interest").hide();
    $(".roadMap").show();
    $(".login_join").hide();
});
$(".login_join-link").click(function() {
    $(".home").hide();
    $(".interest").hide();
    $(".roadMap").hide();
    $(".login_join").show();
    
})
$(".home-link").click(function() {
    $(".home").show();
    $(".interest").hide();
    $(".roadMap").hide();
    $(".login_join").hide();
});