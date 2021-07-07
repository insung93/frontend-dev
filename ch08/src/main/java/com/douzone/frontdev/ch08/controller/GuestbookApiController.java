package com.douzone.frontdev.ch08.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.vo.GuestbookVo;

@Controller
@RequestMapping("/guestbook/api")
public class GuestbookApiController {
	
	@ResponseBody
	@RequestMapping("/list")
	public JsonResult ex1() {
		List<GuestbookVo> list = new ArrayList<>();
		GuestbookVo vo3 = new GuestbookVo();
		vo3.setNo(3L);
		vo3.setName("둘리3");
		vo3.setMessage("호이3");
		list.add(vo3);
		GuestbookVo vo2 = new GuestbookVo();
		vo2.setNo(2L);
		vo2.setName("둘리2");
		vo2.setMessage("호이2");
		list.add(vo2);
		GuestbookVo vo1 = new GuestbookVo();
		vo1.setNo(1L);
		vo1.setName("둘리1");
		vo1.setMessage("호이1");
		list.add(vo1);
		
		return JsonResult.success(list);
	}
}
