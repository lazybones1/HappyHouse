package util;

import java.io.UnsupportedEncodingException;
import java.util.Arrays;
import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.Base64.Encoder;

public class Hash {
   private String pw;
//   private byte[] encryptData;
   private String encryptData;
   private String decryptData;
   
   public Hash(String pw) {
      this.pw = pw;
   }
   
   public String getPw() {
      return pw;
   }

   public void setPw(String pw) {
      this.pw = pw;
   }

//   public byte[] getEncryptData() {
//      return encryptData;
//   }
   
   public String getEncryptData() {
      return encryptData;
   }

   public void setEncryptData(String pw) {
      this.encryptData = encrypt(pw);
   }
   
   public String getDecryptData() {
      return decryptData;
   }

//   public void setDecryptData(byte[] encryptData) {
//      this.decryptData = decrypt(encryptData);
//   }
   
   public void setDecryptData(String encryptData) {
	   this.decryptData = decrypt(encryptData);
   }

   private static String CHARSET = "utf-8";
   private static final String PBUserKey = "ssafy7deajeon611";
   private static byte pbUserKey[] = PBUserKey.getBytes();
   
//   private byte[] encrypt(String pw) {
   private String encrypt(String pw) {
	      String encResult = "";
	      byte[] enc = null;
	      
	      try {
	         enc = KISA_SEED_ECB.SEED_ECB_Encrypt(pbUserKey, pw.getBytes(), 0, pw.getBytes(CHARSET).length);
	      } catch (UnsupportedEncodingException e) {
	         e.printStackTrace();         
	      }
	      Encoder encoder = Base64.getEncoder();
	      byte[] encArray = encoder.encode(enc);
	      
	      for(int i=0; i<encArray.length; i++) {
	         encResult += encArray[i];
	      }
	      return encResult;
	   }

   
//   private String decrypt(byte[] str) {
//      Decoder decoder = Base64.getDecoder();
//      byte[] enc = decoder.decode(str);
//      
//      String result = "";
//      byte[] dec = null;
//      
//      try {
//         dec = KISA_SEED_ECB.SEED_ECB_Decrypt(pbUserKey, enc, 0, enc.length);
//         result = new String(dec, CHARSET);
//      } catch (UnsupportedEncodingException e) {
//         e.printStackTrace();
//      }
//      return result;
//   }
   
   private String decrypt(String pw) {
	   
		  byte[] str = toBytes(pw);
		   	   
	      Decoder decoder = Base64.getDecoder();
	      byte[] enc = decoder.decode(str);
	      
	      String result = "";
	      byte[] dec = null;
	      
	    
	      
	      try {
	         dec = KISA_SEED_ECB.SEED_ECB_Decrypt(pbUserKey, enc, 0, enc.length);
	         result = new String(dec, CHARSET);
	      } catch (UnsupportedEncodingException e) {
	    	  System.out.println("******* " + result);
	    	  
	         e.printStackTrace();
	      }
	      
	    
	      return result;
	  }
   
   private byte[] toBytes(String str) {
	   int idx = 0;
	   StringBuilder tmp = new StringBuilder();
	   byte[] bytes = new byte[str.length()];
	   for(int i = 0; i<str.length(); i++) {		   
		   String tmp2 = tmp.toString();
		   tmp.append(str.charAt(i));		   
		   if(Integer.parseInt(tmp.toString()) > 128) {
			   bytes[idx++] = (byte)Integer.parseInt(tmp2.toString());
			   tmp.setLength(0);
			   tmp.append(str.charAt(i));
		   }		   
	   }
	   if(tmp.length() > 0) {
		   bytes[idx++] = (byte)Integer.parseInt(tmp.toString());
	   }
	   byte[] res = new byte[idx];
	   for(int i = 0; i<idx; i++) {
		   res[i] = bytes[i];
	   }
	   System.out.println("----bytes: " + Arrays.toString(res) );
	   return res;
   }
}