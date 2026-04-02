# add build time

```txt
NSString *buildDate;
NSString *dateStr = [NSString stringWithFormat:@"%@ %@", [NSString stringWithUTF8String:__DATE__], [NSString stringWithUTF8String:__TIME__]];
// Convert to date
NSDateFormatter *dateFormat = [[NSDateFormatter alloc] init];
[dateFormat setDateFormat:@"LLL d yyyy HH:mm:ss"];
NSLocale *usLocale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_US"];
[dateFormat setLocale:usLocale];
NSDate *date = [dateFormat dateFromString:dateStr];
[dateFormat setDateFormat:@"dd/MM/yyyy-HH:mm"];
buildDate = [dateFormat stringFromDate:date];
  [settings setObject:buildDate forKey:@"BUILD_TIME"];
```



> 更新: 2023-03-24 14:21:56  
> 原文: <https://www.yuque.com/u3641/dxlfpu/agn4pm>