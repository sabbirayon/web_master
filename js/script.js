<!-- scroll -->
<script>
  $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100)
  });
</script>
<!-- navbar bg color -->
<script>
  $(window).scroll(function(){
    $('nav').toggleClass('mynav', $(this).scrollTop() > 100)
  });
</script>