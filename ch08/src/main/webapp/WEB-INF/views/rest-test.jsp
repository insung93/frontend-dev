<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>  
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js" type="text/javascript"></script>
<script>
$(function(){
	const vo = {
	};
	
	$("#create").click(function(){
		console.log("post!");
	});
	$("#read").click(function(){
		console.log("get!");
	});
	$("#update").click(function(){
		console.log("put!");
	});
	$("#delete").click(function(){
		console.log("delete!");
	});
});
</script>
</head>
<body>
	<h1>AJAX Test - Restful API</h1>
	<button id="create">Create(post)</button><br><br>
	<button id="read">Read(get)</button><br><br>
	<button id="update">Update(put)</button><br><br>
	<button id="delete">Delete(delete)</button>
	<div id="data"></div>
</body>
</html>