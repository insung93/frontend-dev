package com.douzone.frontdev.ch08.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.vo.UserVo;

@RestController
@RequestMapping("/rest/user")
public class RestApiController {
	// ResponseBody RestController이기 때문에 안해줘도 됨
	@PostMapping("")
	public JsonResult post(UserVo vo) {
		vo.setNo(10L);
		return JsonResult.success(vo);
	}
}
