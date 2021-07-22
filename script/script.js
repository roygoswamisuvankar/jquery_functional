$(document).ready(function(){
    $("#st").hide();
    var name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    $("#save").click(function(){
        var stu_name = $("#studentname").val();

        if(stu_name == ""){
            alert("Field must be filled");
        }else if(!stu_name.match(name)){
            alert("Name Must be Charecter only");
            return false;
        }
        else{
            var i = $("#studentData tr").length+1;
            var table = "<tr><td>"+i+".</td><td>"+stu_name+"</td><td><button type='submit' id='del' onclick='delete()'>Remove</button></td></tr>";

            $("#studentData").append(table);
            $("#st").show(); 
        }
        var stu_name = $("#studentname").val("");
    });


    $("#studentData").on("click","#del", function(e){
        if(confirm("Are you sure to Delete this record!")){
            $(this).closest('tr').remove();
        }else{
            e.preventDefault();
        }
    });

    $("#clear").click(function(e){
        if(confirm("Are you want to sure to delete whole records?")){
            $("#studentData tr").remove();
            $("#st").hide();
        }else{
            e.preventDefault();
        }
    })
});