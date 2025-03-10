MODULE Module1
    PERS tooldata Servo:=[TRUE,[[0,0,114.2],[1,0,0,0]],[0.215,[8.7,12.3,49.2],[1,0,0,0],0.00021,0.00024,0.00009]];
    CONST robtarget Target_10:=[[307.987684807,295.417159951,-1190.516672707],[0,1,0,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_20:=[[307.987693328,295.417196479,-942.334776047],[0,1,0,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_30:=[[-302.012294089,295.417183867,-942.724886706],[0,1,0,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_40:=[[-302.012269685,295.417186912,-1190.906721337],[0,1,0,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_00:=[[0,-0.000003881,-1008.728207824],[0,1,0,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    
    PERS bool SCADA_Start1;
    PERS bool SCADA_Stop1;
    PERS num Toy_Counter := 24;
    PERS num Contador_Celda := 24;
    PERS bool Falla_Celda;
    PERS bool Reset_Celda;
    VAR intnum Stop_Interrupt1;  
    
    PROC main()
        
        IDelete Stop_Interrupt1;
        CONNECT Stop_Interrupt1 WITH Stop_Routine;
        ISignalDI Stop1, 1, Stop_Interrupt1;
        
        IF Reset_Celda = TRUE THEN
            Toy_Counter := 0;
            Contador_Celda := 0;
        ENDIF
            
        WHILE SCADA_Stop1 = FALSE DO
            IF Start1 = 1 OR SCADA_Start1 = TRUE THEN
                Path_10;   
                Toy_Counter := Toy_Counter + 1;
                Contador_Celda := Toy_Counter;
            ELSE
                Home;
            ENDIF
        ENDWHILE
    ENDPROC
    
    TRAP Stop_Routine
        StopMove;  
        Falla_Celda := TRUE;
    ENDTRAP
    
    PROC Path_10()
        MoveJ Target_20,v1000,z100,Servo\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,Servo\WObj:=wobj0;
        WaitTime 1;
        Set Servo_Gripper1;
        WaitTime 1;
        MoveJ Target_20,v1000,z100,Servo\WObj:=wobj0;
        MoveJ Target_30,v1000,z100,Servo\WObj:=wobj0;
        MoveJ Target_40,v1000,z100,Servo\WObj:=wobj0;
        WaitTime 1;
        Reset Servo_Gripper1;
        MoveJ Target_30,v1000,z100,Servo\WObj:=wobj0;
        Home;
        WaitTime 5;
    ENDPROC
    
    PROC Home()
        MoveJ Target_00,v1000,z100,Servo\WObj:=wobj0;
    ENDPROC
    
ENDMODULE
