package br.com.pim.pim.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
    
    @RequestMapping("/")
    @ResponseBody
    public String Hello(){
        return "Hello World!";
    }

}
