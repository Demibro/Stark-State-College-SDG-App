<?php
class Template
{
	public function Template_Start()
	{
		echo <<<START
<!DOCTYPE html>
<html lang="en-US">
<head>
  <script src="https://use.fontawesome.com/4c9c134f39.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="UTF-8"/>
  <title>SDG Home</title>
  <link href="css/SDG-Style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
START;
	 }
public function Template_End()
	{
		echo<<<END
	
  <footer>
    <section id="contact">
      <h4>Contact:&nbsp;</h4>
      <p>President Namey McNamerson&nbsp;</p>
      <p><a href="mailto:MR_prezzz@dudeguy.com">MR_prezzz@dudeguy.com</a></p>
    </section>
    <section id="copyright">
      <p>&copy; 2017 SSC Software Development Guild</p>
    </section>
  </footer>
 
  </div>

</body>
</html>
END;
	}
}

