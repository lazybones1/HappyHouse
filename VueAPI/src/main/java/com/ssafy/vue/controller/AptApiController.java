package com.ssafy.vue.controller;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONObject;
import org.json.XML;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/apt")
@CrossOrigin("*")
public class AptApiController {
	 @GetMapping("/list")
	    public String callApiWithJson(String LAWD_CD, String DEAL_YMD, String pageNo ) {
	        StringBuffer result = new StringBuffer();
	        String jsonPrintString = null;
	        try {
	            String apiUrl = "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?" +
	                    "ServiceKey=WtAH0xEjZ4r%2Bf9GO95YB6DSE26MgCPeV2W7SlW8NJ7MXn6XTc0PRB7Z4JV9xGJyFd4hgwkyasXXddim6scBL7Q%3D%3D" +
	                    "&LAWD_CD=" + LAWD_CD +
	                    "&DEAL_YMD=" + DEAL_YMD +
	                    "&numOfRows=50" +
	                    "&pageNo=" + pageNo;
	            URL url = new URL(apiUrl);
	            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
	            urlConnection.connect();
	            BufferedInputStream bufferedInputStream = new BufferedInputStream(urlConnection.getInputStream());
	            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(bufferedInputStream, "UTF-8"));
	            String returnLine;
	            while((returnLine = bufferedReader.readLine()) != null) {	            	
	                result.append(returnLine);
	            }

	            JSONObject jsonObject = XML.toJSONObject(result.toString());
	            
	            System.out.println("ddd");
            	System.out.println(jsonObject);
            	
	            jsonPrintString = jsonObject.toString();
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        
	        return jsonPrintString;
	    }
}
