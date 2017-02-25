
require('UIButton,UIColor');
defineClass('FDSecondViewController', {

viewDidLoad: function() {
     self.super().viewDidLoad();
     
     self.view().setBackgroundColor(UIColor.whiteColor());
     self.loadButton();
  },
     loadButton: function() {
        var tipBtn = UIButton.alloc().initWithFrame({x:10, y:50, width:200, height:30});
        tipBtn.setTitleColor_forState(UIColor.orangeColor(), 0);
        tipBtn.setTitle_forState("shabi", 0);
        tipBtn.addTarget_action_forControlEvents(self, "clickedBtn:", 1<<6);
        self.view().addSubview(tipBtn);
    },	
    clickedBtn: function(sender) {
        sender.setBackgroundColor(UIColor.greenColor());
        self.dismissViewControllerAnimated_completion(YES,null);
    }
});