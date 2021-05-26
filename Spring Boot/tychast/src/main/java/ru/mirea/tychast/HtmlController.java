package ru.mirea.tychast;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/** Класс - дающий ориентировку по ссылкам. */
@Controller
public class HtmlController {

    /**
     * Запоминает какой файл открывать по данной ссылке.
     * @param model модель
     * @param name имя
     * @return Имя, по которому искать файл
     */
    @RequestMapping(value = { "/", "index.html" }, method = RequestMethod.GET)
    public String index(Model model, String name) {
        model.addAttribute("name", name);
        return "index";
    }

    /**
     * Запоминает какой файл открывать по данной ссылке.
     * @param model модель
     * @param name имя
     * @return Имя, по которому искать файл
     */
    @RequestMapping(value = { "/history.html" }, method = RequestMethod.GET)
    public String history(Model model, String name) {
        model.addAttribute("name", name);
        return "history";
    }

    /**
     * Запоминает какой файл открывать по данной ссылке.
     * @param model модель
     * @param name имя
     * @return Имя, по которому искать файл
     */
    @RequestMapping(value = { "/Contacts.html" }, method = RequestMethod.GET)
    public String Contacts(Model model, String name) {
        model.addAttribute("name", name);
        return "Contacts";
    }

    /**
     * Запоминает какой файл открывать по данной ссылке.
     * @param model модель
     * @param name имя
     * @return Имя, по которому искать файл
     */
    @RequestMapping(value = { "/chop.html" }, method = RequestMethod.GET)
    public String chop(Model model, String name) {
        model.addAttribute("name", name);
        return "chop";
    }

    /**
     * Запоминает какой файл открывать по данной ссылке.
     * @param model модель
     * @param name имя
     * @return Имя, по которому искать файл
     */
    @RequestMapping(value = { "/Catalog.html" }, method = RequestMethod.GET)
    public String Catalog(Model model, String name) {
        model.addAttribute("name", name);
        return "Catalog";
    }
}