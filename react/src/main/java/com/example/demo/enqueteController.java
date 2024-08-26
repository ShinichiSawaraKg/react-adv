package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class enqueteController {

	@GetMapping("create")
	public String create() {
		return "enqueteCreate";
	}
	
	@GetMapping("result")
	public String result() {
		return "enqueteResult";
	}
	
	@GetMapping("resultView")
	public String resultView() {
		return "resultView";
	}
	
}
