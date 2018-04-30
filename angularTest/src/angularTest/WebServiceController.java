package angularTest;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("param")
public class WebServiceController {
	
	
		
		@RequestMapping(value="/webservice/Test0", method=RequestMethod.POST)
	    @ResponseBody
	    public List<List<String>> run(@RequestParam("listParam[]") List<String> param) {
	        // 返回與要顯示的頁面名稱
			System.out.print("Hi Controller!!");
	        return null;
	    }
}
