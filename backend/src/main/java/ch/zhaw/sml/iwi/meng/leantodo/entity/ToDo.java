package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import jakarta.persistence.InheritanceType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class ToDo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private Boolean archived = false;
    private Boolean done = false;

    private String category;
    private String text;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
}