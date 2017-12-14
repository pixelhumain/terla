directory.storePanelHtml = function(params){
      if(directory.dirLog) mylog.log("----------- classifiedPanelHtml",params,params.name);

      str = "";  
      str += "<div class='col-lg-3 col-md-4 col-sm-4 col-xs-12 searchEntityContainer "+params.type+params.id+" "+params.type+" "+params.elTagsList+" '>";
      str +=    "<div class='searchEntity' id='entity"+params.id+"'>";
      
     // directory.colPos = directory.colPos == "left" ? "right" : "left";
       
       /* if(params.updated != null )
          str += "<div class='dateUpdated'><i class='fa fa-flash'></i> <span class='hidden-xs'>publié </span>" + 
                    params.updated + 
                  "</div>";*/
        if(typeof userId != "undefined" && params.creator == userId)
          params.hash=params.hash+'.view.show';
        //if(typeof params.size == "undefined" || params.size == "max")
          str += "<a href='"+params.hash+"' class='container-img-profil lbhp add2fav'  data-modalshow='"+params.id+"'>" + 
                    params.imgProfil + 
                  "</a>";

        str += "<div class='padding-10 informations'>";

        str += "<div class='entityRight no-padding'>";

            /*if(typeof params.size == "undefined" || params.size == "max"){
              str += "<div class='entityCenter no-padding'>";
              str +=    "<a href='"+params.hash+"' class='lbhp add2fav' data-modalshow='"+params.id+"'>" + params.htmlIco + "</a>";
              str += "</div>";
            }*/

            /*str += "<button id='btn-share-event' class='text-dark btn btn-link no-padding margin-left-10 btn-share pull-right'"+
                              " data-ownerlink='share' data-id='"+params.id+"' data-type='"+params.type+"'>"+
                              "<i class='fa fa-share'></i> Partager</button>";*/

           /* if(typeof params.category != "undefined"){
              str += "<div class='entityType'><span class='uppercase bold'>" + params.section + "</span> > " + params.category;
              if(typeof params.subtype != "undefined") str += " > " + params.subtype;
              str += "</div>";
            }*/

           /* var iconFaReply = notEmpty(params.parent) ? "<i class='fa fa-reply fa-rotate-180'></i> " : "";
            str += "<a  href='"+params.hash+"' class='"+params.size+" entityName text-dark lbhp add2fav'  data-modalshow='"+params.id+"'>"+
                      iconFaReply + params.name + 
                   "</a>";*/  
       
            
            if(typeof params.name != "undefined" && params.name != "")
            str += "<div class='entityName'>" + params.name + "</div>";
            
            if(typeof params.description != "undefined" && params.description != "")
            str += "<div class='entityDescription'>" + params.description + "</div>";
          str += "</div>";
          str += "<div class='entityRight no-padding price'>";
            str += "<hr class='margin-bottom-10 margin-top-10'>";
            var devise = typeof params.devise != "undefined" ? params.devise : "€";
            if(typeof params.price != "undefined" && params.price != "")
             str += "<div class='entityPrice col-md-6'><span class='price-trunc'>"+ Math.trunc(params.price) + "</span> " + devise + "</div>";
         
            str += "<a  href='"+params.hash+"' class='showMore btn bg-orange text-white lbhp'  data-modalshow='"+params.id+"'>"+
                      tradTerla.show+" +"+ 
                   "</a>";  
       
          str += "</div>";
        str += "</div>";
      str += "</div>";

      str += "</div>";
      return str;
    };